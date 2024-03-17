import * as React from 'react';
import { Camera, CameraDevice, useCameraDevices } from 'react-native-vision-camera';
import { StyleSheet, View, Text, Button } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const CameraPage: React.FC = () => {
  const [hasCameraPermission, setHasCameraPermission] = React.useState(false);
  const device = Camera.getAvailableCameraDevices().filter((d) => d.position === 'back')[0];

  React.useEffect(() => {
    // Vérification de l'autorisation de la caméra au chargement de l'application
    check(PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        if (result === RESULTS.GRANTED) {
          setHasCameraPermission(true);
        }
      })
      .catch((error) => {
        console.error('Error checking camera permission:', error);
      });
  }, []);

  const requestCameraPermission = () => {
    // Demande de l'autorisation de la caméra si elle n'a pas déjà été accordée
    request(PERMISSIONS.ANDROID.CAMERA)
      .then((result) => {
        if (result === RESULTS.GRANTED) {
          setHasCameraPermission(true);
        }
      })
      .catch((error) => {
        console.error('Error requesting camera permission:', error);
      });
  };

  if (!hasCameraPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>Permission to access the camera is required.</Text>
        <Button title="Allow Camera Access" onPress={requestCameraPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    color: 'white',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
  },
});

export default CameraPage;

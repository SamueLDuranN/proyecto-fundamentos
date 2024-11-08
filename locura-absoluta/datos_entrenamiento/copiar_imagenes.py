import os
import shutil

# Ruta específica donde están tus imágenes
ruta_origen = 'C:\\Users\\PC\\OneDrive\\Escritorio\\trabajo'

print("Archivos encontrados en la carpeta:")
archivos = os.listdir(ruta_origen)
for archivo in archivos:
    print(f"- {archivo}")

print("\nCopiando imágenes JFIF...")

# Crear la carpeta de destino si no existe
os.makedirs('datos_entrenamiento/bueno', exist_ok=True)

# Copiar archivos JFIF
contador = 0
for archivo in archivos:
    if archivo.lower().endswith('.jfif'):
        nombre_nuevo = f'electrodomestico_bueno_{contador}.jpg'  # Lo guardamos como jpg
        ruta_origen_completa = os.path.join(ruta_origen, archivo)
        ruta_destino_completa = os.path.join('datos_entrenamiento/bueno', nombre_nuevo)
        
        try:
            shutil.copy2(ruta_origen_completa, ruta_destino_completa)
            print(f"Copiada imagen: {archivo} -> {nombre_nuevo}")
            contador += 1
        except Exception as e:
            print(f"Error al copiar {archivo}: {str(e)}")

print(f"\nProceso completado. Se copiaron {contador} imágenes.")
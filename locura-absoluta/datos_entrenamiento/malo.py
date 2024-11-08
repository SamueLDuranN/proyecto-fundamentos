import os
import shutil

# Ruta donde están tus imágenes malas
ruta_origen = 'C:\\Users\\PC\\OneDrive\\Escritorio\\malas'  # Corregido con dobles barras

# Ruta donde se copiarán
ruta_destino = 'datos_entrenamiento/malo'

print("Archivos encontrados en la carpeta:")
archivos = os.listdir(ruta_origen)
for archivo in archivos:
    print(f"- {archivo}")

print("\nCopiando imágenes malas...")

# Crear la carpeta de destino si no existe
os.makedirs(ruta_destino, exist_ok=True)

# Copiar archivos JFIF
contador = 0
for archivo in archivos:
    if archivo.lower().endswith('.jfif'):
        nombre_nuevo = f'electrodomestico_malo_{contador}.jpg'
        ruta_origen_completa = os.path.join(ruta_origen, archivo)
        ruta_destino_completa = os.path.join(ruta_destino, nombre_nuevo)
        
        try:
            shutil.copy2(ruta_origen_completa, ruta_destino_completa)
            print(f"Copiada imagen: {archivo} -> {nombre_nuevo}")
            contador += 1
        except Exception as e:
            print(f"Error al copiar {archivo}: {str(e)}")

print(f"\nProceso completado. Se copiaron {contador} imágenes a la carpeta 'malo'.")
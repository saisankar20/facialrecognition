import face_recognition

image =face_recognition.load_image_file('grup pics\pp.jpg')
face_locations = face_recognition.face_locations(image)

#print(face_locations)

print(f'There are {len(face_locations)} people in this image')
import face_recognition

image_of_bill = face_recognition.load_image_file('faces\bill gates.jpg')
bill_face_encoding = face_recognition.face_encodings(image_of_bill)[0]

unkown_image = face_recognition.load_image_file('unknown\download (1).jpg')
unkown_face_encoding = face_recognition.face_encodings(_unkown_image)[0]


results =face_recognition.compare_faces([bill_face_encoding],unkown_face_encoding)

if results[0]:
    print('this is bill gates')
else:
      print('not bill gates')

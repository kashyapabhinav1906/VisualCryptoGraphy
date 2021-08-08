# Visual Cryptography


[Course project for CSL2060 Software Engineering](https://project-deploy-2b18f.web.app) click to open website

## About

To solve the problem of data security we have built this software that encrypt your data with the help of a private key without that key your file can't be decrypted back and your data will be secure.For encryption and decryption process we have used AES algorithm which is one of the most secure algorith for encryption .we have imported this AEs algorithm from the Crypto-js library. we have also used Firebase for Authentication, Database and hosting our site.

### `Library used `


Open [Reactstrap](https://reactstrap.github.io/) to add components.We have used this react library to add components in our website components like form,navbar etc.\
Open [React-recaptch](https://www.npmjs.com/package/react-recaptcha) to add recaptch.We have used this  library to add components in our website components like form,navbar etc.\
Open [React-toastify](https://www.npmjs.com/package/react-toastify) to add components.We have used this  library to add recaptch on our reset-password page.\
Open [Axios](https://www.npmjs.com/package/axios) to add axios.We have used this library to download our decypted file .\
Open [Crypto-js](https://www.npmjs.com/package/crypto-js) to add crypto-js.We have used this library to add our encryption and decryption AES algorithm.


### `Login page`

If users credentials are correct then he/she will be logged in otherwise a alert message will pop-up regarding what went wrong.
![running tests](image/Screenshot%20(333).png)


### `Signin page`

User can create his account here or he/she may login through google account.
![running tests](image/Screenshot%20(334).png)


### `Forgot Password page`

If user forgets his/her password he can follow this steps and after clicking on sent button a reset link will be sent to the given email address.
![running tests](image/Screenshot%20(336).png)


### `Home page`

Here you can choose what you want to do whether you want to encrypt your file or you want to decrpyt it.
![running tests](image/Screenshot%20(337).png)


### `Contact Page`
You can contact us by any of the below method
![running tests](image/Screenshot%20(338).png)


### `Profile page`

Here user can create his profile.
![running tests](image/Screenshot%20(339).png)


### `Encryption process`
This are the 3 simple steps to encrypt your file.
![running tests](image/Screenshot%20(340).png)
![running tests](image/Screenshot%20(341).png)
![running tests](image/Screenshot%20(342).png)


### `Decryption process`
This are the 3 simple steps to decrypt your file.
![running tests](image/Screenshot%20(343).png)
![running tests](image/Screenshot%20(344).png)
![running tests](image/Screenshot%20(345).png)

### `Firebase`
Firebase is a backend platform.\ 
We have used firebase for authentication ,database and Hosting:
![running tests](image/Screenshot%20(353).png)

### `Firebase\Authenticaion`
Firebase Authentication provides backend service.\
It will take care of all the login devices.
![running tests](image/Screenshot%20(346).png)

### `Firebase\Firestore`
Database were users Feedback and information will be stored.

Users: Profile page details will be stored here.
![running tests](image/Screenshot%20(347).png)

Feedback: Contact us form will be saved here.
![running tests](image/Screenshot%20(348).png)


### `Firebase\Storage`
Cloud Storage for Firebase is a powerful, simple, and cost-effective object storage service built for Google scale. \
All the profile images will be stored here.
![running tests](image/Screenshot%20(349).png)

### `Firebase\Hosting`

![running tests](image/Screenshot%20(350).png)

Overview
![running tests](image/Screenshot%20(351).png)

Usage 
![running tests](image/Screenshot%20(352).png)



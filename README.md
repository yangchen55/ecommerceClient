### cms frontend 
cms frontend for the ecommerce platform


## WORK FLOW

### RESET PASSWORD
when admin user forgets their passowrd, they should be able to reset password from the system :


### so , flow the steps to byikls a password reser system

1. show the email input form and let user submit that to  API
2. Be: get the email data from the api and check if user exist in our db associated with that email
3. Be: if we have no user found, send error message saying user not found, that completes the transaction
4. BE: if user found,  generate a random 6 digit number and store ina sessions table.(utils file)
5. BE: send that randomly generated 6 digit number to the user email adddress.
6. BE: at the same time, respond to the system saying opt has been sent to their email
7. BE: if we receive success message from the backend, then show another form that requires you to enter the opt that was   sent to your email and 2 more input field for the new paassword and confirm password. 
8. Be: once user submits the dorm, in the api, grab that opt, password, and email .
9. check if combination of email and opt exist in the sessions tBLE, IF IT DOESNOT SIMPLWY RESPOND SAYING INVALID PASSWORD.
if it does exist then remover the data form the session tabke and continurew ot step 10.
10.  BE: encrpt the incoming plain password, update user table with that new encrypted password bases on the  user's email.
11. Be: once pasword update operation is successful has changed, an also email notification saying password has been changed and respond to password.




### session model
status: string
token: string
association: string

ct, ut


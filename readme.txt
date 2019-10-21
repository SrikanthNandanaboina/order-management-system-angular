- Developed a login page with username, password and remember me, Here I have used localstorage for storing
    of email, password and remember me in base64 format where a normal user can't understand

- Added validation for username and password which are required with email validation and password wih
    minimum of 8 characters. 

- Once user logs in, redirected to orders page.

- The user will be able to view all orders in a table.

- Each order has Order Number, Order Due Date, Customer buyer name, Customer Address, Customer Phone, 
    OrderTotal(total value of order) 

- At the top of the table, on the right hand side there is a New Order button to add orders. 

- Clicking on New Order a popup modal with fields will be opened, Here I have used NgbActiveModal to 
    add orders

- The table will have edit, delete actions once the new order is added.

- Clicking on Edit button a NgbActiveModal popup will open with all fields filled with concerned data 
    with all fields editable.

- Clicking on delete user will be asked for the confirmation to delete.

- And I haven't used ui-router and thought that it would take time to learn and complete and 
    I have completed with the angular routing in which I am aware of.
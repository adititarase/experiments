<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Contact Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
        }
        .contact-list {
            margin-top: 20px;
        }
        .contact-entry {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border: 1px solid #ccc;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <h2>Contact Form</h2>
    <input type="text" id="name" placeholder="Name">
    <input type="email" id="email" placeholder="Email">
    <input type="number" id="phone" placeholder="Phone Number">
    <button onclick="addContact()">Add Contact</button>
    
    <div class="contact-list" id="contactList"></div>

    <script>
        let contacts = [];

        function addContact() {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            
            if (!name || !email || !phone) {
                alert("All fields are required!");
                return;
            }
            
            contacts.push({ name, email, phone });
            
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            
            loadContacts();
        }

        function loadContacts() {
            const contactList = document.getElementById("contactList");
            contactList.innerHTML = "";
            
            contacts.forEach((contact, index) => {
                const entry = document.createElement("div");
                entry.classList.add("contact-entry");
                entry.innerHTML = `
                    <span>${contact.name} | ${contact.email} | ${contact.phone}</span>
                    <button onclick="editContact(${index})">Edit</button>
                    <button onclick="deleteContact(${index})">Delete</button>
                `;
                contactList.appendChild(entry);
            });
        }
        
        function deleteContact(index) {
            contacts.splice(index, 1);
            loadContacts();
        }
        
        function editContact(index) {
            document.getElementById("name").value = contacts[index].name;
            document.getElementById("email").value = contacts[index].email;
            document.getElementById("phone").value = contacts[index].phone;
            
            deleteContact(index);
        }
    </script>
</body>
</html>
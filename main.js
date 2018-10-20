let submit1 = document.getElementById('submit-btn-1');
let submit2 = document.getElementById('submit-btn-2');
let nameInputMember = document.getElementById('name-member');
let phoneNumberInputMember = document.getElementById('phone-number-member');
let emailInputMember = document.getElementById('email-member');
let ageInput = document.getElementById('age');
let conditionsInput = document.getElementById('conditions');
let nameInputContact = document.getElementById('name-contact');
let phoneNumberInputContact = document.getElementById('phone-number-contact');
let emailInputContact = document.getElementById('email-contact');
let familyIcon = document.getElementById('family-icon');
let familyIconContent = document.getElementById('family-icon-content');

familyIcon.addEventListener('')

submit1.addEventListener('click', createNewMember);
submit2.addEventListener('click', createEmergencyContact);

function createNewMember() {
  let member = new Member(
    nameInputMember.value,
    phoneNumberInputMember.value,
    emailInputMember.value,
    ageInput.value,
    conditionsInput.value
  );
  console.log(member);
}

class Member {
  constructor(name, phoneNumber, email, age, conditions) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.age = age;
    this.hasSpecialNeed = false;
    this.conditions = conditions;
  }
}

function createEmergencyContact() {
  let contact = new EmergencyContact(
    nameInputContact.value,
    phoneNumberInputContact.value,
    emailInputContact.value
  );
  console.log(contact);
}

class EmergencyContact {
  constructor(name, phoneNumber, email) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

let Phone = function (phoneID,powerStatus,messageText,inboxMessages,sentMessages) {
    this.phoneID = phoneID;
    this.powerStatus = powerStatus;
    this.batteryLevel = 100;
    this.messageText = messageText;
    this.inboxMessages = inboxMessages;
    this.sentboxMessages = sentMessages;

    this.showBatteryLevel = function (){
        let battery = this.batteryLevel;
        return document.getElementById("batteryStatus").innerHTML = battery;
    };

    this.changeBatteryLevel = function (phone,action) {
        if (action == "charging"){
            return phone.batteryLevel++;
        }
        if (action == "sending"){
            return phone.batteryLevel--;
        }
    };

    this.chargingPhone = function (phone) {
        phone.changeBatteryLevel(phone,"charging");
    }

    this.changePowerStatus = function (phone,action) {
        if (action == "on"){
            phone.powerStatus = true;
        }
        if (action == "sending"){
            phone.powerStatus = false;
        }
        return phone.powerStatus;
    };
    this.addNewMessageTextToSentBox = function(message, phone){
        phone.sentboxMessages.push(message);
    };
    this.addNewMessageTextToInBox = function (message, phone){
        phone.inboxMessages.push(message);
    };

    this.displayMessageText = function (phone) {
        return phone.messageText;
    }
    this.displayInboxMessage = function (phone){
        return phone.inboxMessages;
    }

    this.displaySentboxMessages = function (phone) {
        return phone.sentboxMessages;
    }

    this.showListInboxMessage = function (phone) {
        let html = "";
        for (let i = 0; i < phone.inboxMessages.length; i++) {
            html += "<option>" + phone.inboxMessages[i] + "</option>";
        }
        document.getElementById("listInboxMess").innerHTML = html;


    };
    this.showListOutboxMessage = function (phone) {
        let html = "";
        for (let i = 0; i < phone.sentboxMessages.length; i++) {
            html += "<option>" + phone.sentboxMessages[i] + "</option>";
        }
        document.getElementById("listOutboxMess").innerHTML = html;
    };
};

let iphone = new Phone("iphone",true,"Hi! I'm Iphone",["inbox1","inbox2","inbox3",],["sent-box1","sent-box2","sent-box3"]);
let samsung = new Phone("samsung",true,"Hi! I'm SamSung",["inbox1","inbox2","inbox3"],["sent-box1","sent-box2","sent-box3"]);
//send and receive message between 2 phone is ok
function sendMessage(phoneSend,phoneReceive){

    let messageContent="";
    if(phoneSend.phoneID=="iphone"){
        messageContent = document.getElementById("myTextArea1").value;
        document.getElementById("myTextArea1").value ="";
        document.getElementById("myTextArea2").value =messageContent;

        phoneSend.showBatteryLevel(phoneSend.batteryLevel--);

    }
    if(phoneSend.phoneID=="samsung"){
        messageContent = document.getElementById("myTextArea2").value;
        document.getElementById("myTextArea2").value ="";
        document.getElementById("myTextArea1").value =messageContent;

        phoneSend.showBatteryLevel(phoneSend.batteryLevel--);
    }

    phoneSend.messageText = messageContent;
    phoneReceive.messageText= phoneSend.messageText;

    phoneSend.addNewMessageTextToSentBox(phoneSend.messageText,phoneSend);
    phoneReceive.addNewMessageTextToInBox(phoneReceive.messageText,phoneReceive);

    console.table(phoneSend);
    console.table(phoneReceive);
}
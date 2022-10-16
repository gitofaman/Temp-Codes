//to copy data
var formElement = $0
var namedInputs = formElement.querySelectorAll('[name]') 
var namedSaveData = {}
namedInputs.forEach(nameInput=>{
    namedSaveData[nameInput.name] = nameInput.value;
})
copy(namedSaveData)
//after the data is copied add it as saveData


//to paste data
var formElement = $0
var namedInputs = formElement.querySelectorAll('[name]') 
function pasteInputs(data) {
    namedInputs.forEach(namedInput=>{
        namedInput.value = data[namedInput.name]
    })
}

var saveData = {
    "medium": "",
    "Name": "Periscope",
    "Phone": "123456",
    "Email": "per@per.com",
    "Confirm-Email": "per@per.com",
    "Date-of-Move": "10/13/2022",
    "Preferred-Time": "Mid Afternoon (11AM-3PM)",
    "From-Address": "Perte",
    "From-Suburb": "Perte",
    "From-Postcode": "99888",
    "From-State": "Perte",
    "To-Address": "Perte",
    "To-Suburb": "Perte",
    "To-Postcode": "989899",
    "To-State": "Perte",
    "From-Property-Type": "House",
    "From-Access-Type": "Single Storey",
    "To-Property-Type": "Villa / Townhouse",
    "To-Access-Type": "Double Storey",
    "Number-of-Bedrooms": "100000000",
    "Garage-Outdoor": "Outdoor",
    "Packing-required": "Fragile Packing",
    "Terms": "on"
}

pasteInputs(saveData)

//save datas for further use
//moves and more - 15 oct 2022
var contactSaveData = {
    "medium": "",
    "Name": "Periscope Test",
    "Email": "periscopetest@periscope.com",
    "Phone": "98765",
    "Booking-Address": "Dljfasdlf",
    "Booking-Date": "11",
    "Time": "11:09",
    "Message": "aklsdjflasdlfasjldfjls"
}


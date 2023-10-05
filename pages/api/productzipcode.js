export default function handler(req, res) {

    let zipCodes = {
        "54000": ["Lahore", "Punjab"],
        "38000": ["Faisalabad", "Punjab"],

        "60000": ["Multan", "Punjab"],
        "63100": ["Bahawalpur", "Punjab"],
        "62300": ["Bahawalnagar", "Punjab"],
        "62350": ["Chishtian", "Punjab"],
        "46000": ["Rawalpindi", "Punjab"],
        "52250": ["Gujranwala", "Punjab"],
        "51310": ["Sialkot", "Punjab"],
        "50700": ["Gujrat", "Punjab"],
        "40100": ["Sargodha", "Punjab"],
        "64200": ["Rahim Yar Khan", "Punjab"],

        "44000": ["Islamabad", "Islamabad Capital Territory"],

        "74000": ["Karachi", "Sindh"],
        "71000": ["Hyderabad", "Sindh"],
        "65200": ["Sukkur", "Sindh"],
        "50000": ["Larkana", "Sindh"],
        "6000": ["Sukkur", "Sindh"],

        "25000": ["Peshawar", "Khyber Pakhtunkhwa"],
        "87300": ["Quetta", "Balochistan"],

        "50040": ["Mirpur", "Azad Kashmir"]

    }

    res.status(200).json(zipCodes)

}

import React, {Component} from 'react';
const Test = () => {
const SHEET_ID = '1iQeoKog_yKXAh4vcmdxqnnS-DLbC3Pgdn5FaT_4lM-E';
const ACCESS_TOKEN = 'ya29.a0Adw1xeV7QH5E12O-pNxPkSfWK4_J-y5QtVxldMD7kjmEL5-hlTsnI792Zaa5uVapN5hlebN4B8S1xSfsWu82VYrh3NOnXCK4a9Lxvr-PfRx_aCsAXzBmb2Z-MrJnWyUPIo01yUavSrpiD9u4LkXiioG1QWKj9FesIhU';

   const updateSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({

        "requests": [
          {
            "updateCells": {
              "range": {
                "startRowIndex": 0,
                "startColumnIndex": 0,
                "endColumnIndex": 1,
                "endRowIndex": 3,
                "sheetId": 0
              },
              " ": [
                {
                  "values": [
                    {
                      "userEnteredValue": {
                        "stringValue": "Adnan1"
                      }
                    }
                  ]
                },
                {
                  "values": [
                    {
                      "userEnteredValue": {
                        "stringValue": "Adnan2"
                      }
                    }
                  ]
                },
                {
                  "values": [
                    {
                      "userEnteredValue": {
                        "stringValue": "Adnan3"
                      }
                    }
                  ]
                }
              ],
              "fields": "*"
            }
          }
        ]

      })
    })
  }

    return ( 
      <div className = "App" >
        hello world 
        <button onClick={updateSheetValues}>Update A1</button>
      </div>
    );

}

export default Test;
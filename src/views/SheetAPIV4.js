import React from 'react';

const SHEET_ID = '1Nw3UOKfCNLBk8hdu5tnmEyw_mDJWzhTF7qZcx_SYkrE';
const ACCESS_TOKEN = 'ya29.a0Ae4lvC2PLokytA3ylljWnAsTIzi2QEW616dTuhpeu2L9BqgRT_iG7hGN_Nzki7BuHeOOqOhA4e5QDwdaZHzcqh0-XbiQhT2C-WoGjLN-bAg1cn_zqYL8iov8q6VNIGPEPiNByty3C2CM3hCBw_XRreQc84yW833u7Zk';

class SheetAPIV4 extends React.Component {
	updateSheetValues = () => {
		fetch('https://sheets.googleapis.com/v4/spreadsheets/1Nw3UOKfCNLBk8hdu5tnmEyw_mDJWzhTF7qZcx_SYkrE:batchUpdate', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				//update this token with yours. 
				Authorization: 'Bearer ya29.a0Ae4lvC2PLokytA3ylljWnAsTIzi2QEW616dTuhpeu2L9BqgRT_iG7hGN_Nzki7BuHeOOqOhA4e5QDwdaZHzcqh0-XbiQhT2C-WoGjLN-bAg1cn_zqYL8iov8q6VNIGPEPiNByty3C2CM3hCBw_XRreQc84yW833u7Zk',
				},
			body: JSON.stringify({
				"requests": [
						{
						"addSheet": {}
						}
					]
				})
			})
		}
	render() {
		return ( 
			<div className = "SheetAPIV4" >
				<button onClick={this.updateSheetValues}>Update A1</button>
			</div>
			);
		}
	}

export default SheetAPIV4;
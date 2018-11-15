/*******************************************************************************
 * Copyright (c) 2014 IBM Corp.
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * and Eclipse Distribution License v1.0 which accompany this distribution.
 *
 * The Eclipse Public License is available at
 *   http://www.eclipse.org/legal/epl-v10.html
 * and the Eclipse Distribution License is available at
 *   http://www.eclipse.org/org/documents/edl-v10.php.
 *
 * Contributors:
 *   Bryan Boyd - Initial implementation
 *******************************************************************************/

var config = {
	iot_deviceType: "phone",     // replace with your deviceType
	iot_deviceOrg: "mbllp0",       // replace with your IoT Foundation organization
	iot_deviceSet: [               // replace with your registered device(s)
	//	{ deviceId: "Visitador001", token: "vB_38cT?RUHsFz8Epk" },
		//{ deviceId: "Visitador002", token: "8Z0Zx2THwgXjeV5Cuo" },
		{ deviceId: "DevVisitadorRuta1", token: "l?HsDBjTRBw7S-SM?g" }
	],
	iot_apiKey: "a-mbllp0-rmyaxqysep",    // replace with the key for a generated API token
	iot_apiToken: "T2_4eM6WioCOHZjwhM",  // replace with the generated API token

	// these topics will be used by Geospatial Analytics
	notifyTopic: "iot-2/type/api/id/geospatial/cmd/geoAlert/fmt/json",
	inputTopic: "iot-2/type/phone/id/+/evt/telemetry/fmt/json",
};

try {
	module.exports = config;
} catch (e) { window.config = config; }

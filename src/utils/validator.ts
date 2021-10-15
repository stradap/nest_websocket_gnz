import Ajv from "ajv"

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const msgSchema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "first_name": "Gene",
            "last_name": "Oberbrunner",
            "timestamp": "2021-10-15T13:09:42.9149687Z",
            "sip": "https://127.0.0.1:33213/95910747-f9a2-4101-924f-6d613e8fa834",
            "city": "Jakobberg",
            "state": "MT",
            "phone_number": "6755527725",
            "priority": 20
        }
    ],
    "required": [
        "first_name",
        "last_name",
        "timestamp",
        "sip",
        "city",
        "state",
        "phone_number",
        "priority"
    ],
    "properties": {
        "first_name": {
            "$id": "#/properties/first_name",
            "type": "string",
            "title": "The first_name schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Gene"
            ]
        },
        "last_name": {
            "$id": "#/properties/last_name",
            "type": "string",
            "title": "The last_name schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Oberbrunner"
            ]
        },
        "timestamp": {
            "$id": "#/properties/timestamp",
            "type": "string",
            "title": "The timestamp schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "2021-10-15T13:09:42.9149687Z"
            ]
        },
        "sip": {
            "$id": "#/properties/sip",
            "type": "string",
            "title": "The sip schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "https://127.0.0.1:33213/95910747-f9a2-4101-924f-6d613e8fa834"
            ]
        },
        "city": {
            "$id": "#/properties/city",
            "type": "string",
            "title": "The city schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Jakobberg"
            ]
        },
        "state": {
            "$id": "#/properties/state",
            "type": "string",
            "title": "The state schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "MT"
            ]
        },
        "phone_number": {
            "$id": "#/properties/phone_number",
            "type": "string",
            "title": "The phone_number schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "6755527725"
            ]
        },
        "priority": {
            "$id": "#/properties/priority",
            "type": "integer",
            "title": "The priority schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                20
            ]
        }
    },
    "additionalProperties": true
}

export function validateJSON(JSON) {
    const validator = ajv.compile(msgSchema);
    return validator(JSON);
}
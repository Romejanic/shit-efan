# shit-efan
An IoT fan but it's badly designed.

This project is designed to be run on a Raspberry Pi with
a fan attached via GPIO.

## Getting Started
```sh
$ git clone https://github.com/Romejanic/shit-efan.git/
$ cd shit-efan
$ npm i            # install dependencies
$ nano config.json # create config file
$ npm run start    # start the web server
```

Before running you must create a `config.json` file. There is only
one required property (so far) in this file:

```json
{
    "pin": 18     // the GPIO pin of the fan relay
}
```
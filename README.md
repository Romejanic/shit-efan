# shit-efan
An IoT fan but it's badly designed.

This project is designed to be run on a Raspberry Pi with
a fan attached via GPIO.

## Getting Started
```sh
$ git clone https://github.com/Romejanic/shit-efan.git/
$ cd shit-efan
$ npm i               # install dependencies
$ nano config.json    # create config file
$ sudo npm run start  # start the web server
```
(`sudo` is most likely required since the program requires
hardware access and opens a web server on port 80).

### config.json
Before running you must create a `config.json` file. There is only
one required property (so far) in this file: `pin`. It defines the
GPIO pin which the fan relay is connected to. For example, if it is
connected to pin 18, the `config.json` should be:

```json
{
    "pin": 18
}
```

### Running asynchronously
If you would like to run the program asynchronously (run without blocking
the terminal and ignoring hangup signals) you can run it with the
following command:

```sh
$ sudo npm run async
```
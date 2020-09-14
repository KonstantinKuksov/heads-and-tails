# heads-and-tails

Simple console game of guessing the side of the coin

## Install

Clone the repository by typing in the command line:
'git clone https://github.com/KonstantinKuksov/heads-and-tails'

Go to the repository folder and run 'npm install' at the command line

## Usage

Go to project folder.
To run the application, type in the command line:
'node app'

By default, game logs will be written to 'logs.json'

You can also specify your own log file.
To do this, when starting the game, specify the file name (*.json only):
'node app <yourfilename.json>'
To write logs to your own file, you need to specify its name every time you start the game.

When the game starts, the console will display a message:
"Log file: <yourfilename.json>"
"Let's start!"
Write the chosen side of the coin to the console ("heads" or "tails")
or write "exit" to close aplication.

You can also check the game statistics.
To do this, run the command when not playing:
'node log-info' - to get information from the default file or
'node log-info <yourfilename.json>' - to get information from your log file.

Have a nice game!

## License

ISC


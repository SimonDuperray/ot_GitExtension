import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of	 code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gitextension" is now active!');

	const run_batch = (commit: string) => {
		// run script with given commit name in parameter
		let path_and_param = "C:\\Users\\simon\\OneDrive\\Documents\\PROGRAMMATION\\LANGAGES\\TypeScript\\GitExtension\\gitextension\\src\\script.bat";
		require("child_process").exec(path_and_param, (err: string, stdout: string, stderr: string) => {
			if(err){
				return console.log(err);
			}
			console.log(stdout);
		});
	};

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('gitextension.puco', () => {
		// Display a message box to the user
		vscode.window.showInputBox({
			prompt: 'Type string with no space',
			placeHolder: 'Commit Name'
		}).then(value => {
			if(value === undefined){
				throw new Error('cancelled');
			} else {
				run_batch(value);
				vscode.window.showInformationMessage("Commit Pushed on your GitHub !");
			}
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
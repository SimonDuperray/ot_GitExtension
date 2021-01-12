import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of	 code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gitextension" is now active!');

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
				vscode.window.showInformationMessage(value);
			}
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
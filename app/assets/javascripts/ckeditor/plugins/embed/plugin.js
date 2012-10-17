(function () {
    var embedCmd = {
        exec: function (editor) {
            editor.openDialog('embed');
            return
        }
    };
    CKEDITOR.plugins.add('embed', {
        requires: ['dialog'],
        init: function (editor) {
            var commandName = 'embed';
            editor.addCommand(commandName, embedCmd);
            editor.ui.addButton('Embed', {
                label: 'Embed',
                command: commandName,
                icon: this.path + "images/embed.png"
            });
            CKEDITOR.dialog.add(commandName, CKEDITOR.getUrl(this.path + 'dialogs/embed.js'))
        }
    })
})();

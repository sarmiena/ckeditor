(function () {
    CKEDITOR.dialog.add('embed', function (editor) {
        return {
            title: 'embed',
            minWidth: CKEDITOR.env.ie && CKEDITOR.env.quirks ? 368 : 350,
            minHeight: 240,
            onShow: function () {
                this.getContentElement('general', 'content').getInputElement().setValue('')
            },
            onOk: function () {
                var text = this.getContentElement('general', 'content').getInputElement().getValue();
                this.getParentEditor().insertHtml(text)
            },
            contents: [{
                label: 'asdf',
                id: 'general',
                elements: [{
                    type: 'html',
                    id: 'pasteMsg',
                    html: '<div style="white-space:  normal;width:340px;">' + 'asdf' + '</div>'
                }, {
                    type: 'html',
                    id: 'content',
                    style: 'width:340px;height:170px',
                    html: '<textarea style="' + 'width:346px;' + 'height:170px;' + 'resize: none;' + 'border:1px solid black;' + 'background-color:white">' + '</textarea>',
                    focus: function () {
                        this.getElement().focus()
                    }
                }]
            }]
        }
    });
})();

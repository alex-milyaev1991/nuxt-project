export default {
  getEditorConfig() {
    return {
      toolbar: {
        items: [
          'heading',
          '|',
          'fontFamily',
          'fontColor',
          // 'fontSize',
          'fontBackgroundColor',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'highlight',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'alignment',
          '|',
          'indent',
          'outdent',
          // '|',
          // 'subscript',
          // 'superscript',
          '|',
          'specialCharacters',
          'link',
          'imageInsert',
          'blockQuote',
          'insertTable',
          // 'mediaEmbed',
          // 'code',
          // 'codeBlock',
          '|',
          'undo',
          'redo',
        ],
      },
      language: 'en',
      image: {
        toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'tableCellProperties',
          'tableProperties',
        ],
      },
      simpleUpload: {
        // The URL that the images are uploaded to.
        uploadUrl: `${process.env.apiUrl}/uploads`,

        // Enable the XMLHttpRequest.withCredentials property.
        withCredentials: false,

        // Headers sent along with the XMLHttpRequest to the upload server.
        headers: {
          Authorization: decodeURIComponent(
            document.cookie
              .split('; ')
              .find((row) => row.startsWith('auth._token.local='))
              .split('=')[1]
          ),
        },
      },
    }
  },
}

import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useFileContext } from '../../contexts/FileContext';

function CodeEditor() {
  const editorRef = useRef<any>(null);
  const { selectActiveItem } = useFileContext();

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  function handleEditorChange(value: string | undefined) {
    if (value !== undefined) {
      console.log(value);
    }
  }

  return (
    <Editor
      defaultLanguage='javascript'
      value={selectActiveItem?.content || ''}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      height={'100%'}
      width={'100%'}
      theme='vs-dark'
      options={{
        minimap: {
          enabled: true,
        },
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        readOnly: false,
      }}
    />
  );
}

export default CodeEditor;

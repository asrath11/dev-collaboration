import EditorHeader from '../components/Editor/EditorHeader';
import EditorLayout from '../components/Editor/EditorLayout';

function Editor() {
  return (
    <div className='flex flex-col h-screen'>
      <EditorHeader />
      <EditorLayout />
    </div>
  );
}

export default Editor;

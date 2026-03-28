'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Blockquote from '@tiptap/extension-blockquote'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import { BulletList, ListItem, OrderedList } from '@tiptap/extension-list'

const Tiptap = () => {
  const editor = useEditor({
    extensions: 
    [
      Document, // extensão obrigatória, pois o TipTap utiliza esse componente para "encapsular" todo o "documento" que o Editor abrange
      Text, // o mesmo se aplica ao Text, pois sem ele um texto simples, mesmo que encapsulado em outra tag, pode gerar um erro (provavelmente tem no StarterKit, mas importado separado por motivos de aprendizado sobre as dependências)
      Paragraph,
      Blockquote,
      Bold,
      Italic,
      Underline,
      Strike,
      ListItem,
      OrderedList,
      BulletList,
      Heading,
      Highlight.configure({
        HTMLAttributes: {
          class: 'rounded-xs px-1 bg-orange-500/30 dark:text-neutral-50',
        },
      }),
    ],

    content: '<p>Hello World!</p>',
    editorProps: {
      attributes: {
        class: 'w-full min-h-32 border p-3 rounded-lg border-neutral-500 focus:border-amber-50 outline-none text-black dark:text-neutral-50',
      },
    },
    /**
     * This option gives us the control to enable the default behavior of rendering the editor immediately.
     */
    immediatelyRender: false,
    /**
     * This option gives us the control to disable the default behavior of re-rendering the editor on every transaction.
     */
    shouldRerenderOnTransaction: false,

    /*
    * Parte de estilização extra das extensões
    */

  })

  if (!editor) {
    return null
  }

  return <EditorContent 
    editor={editor} 
    className='w-full'
    />
}

export default Tiptap
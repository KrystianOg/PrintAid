import { useCallback, useState, ChangeEvent } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import "./ProductEditor.css"; // You'll need to create this

interface ProductDescriptionEditorProps {
  content?: string;
  onChange?: (content: string) => void;
}

const ProductDescriptionEditor = ({
  content,
  onChange,
}: ProductDescriptionEditorProps) => {
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "product-image",
        },
        inline: false,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "product-link",
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Underline,
    ],
    content: content || "<p>Start writing your product description...</p>",
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  const addImage = useCallback(() => {
    if (imageUrl && editor) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl("");
      setShowImageDialog(false);
    }
  }, [editor, imageUrl]);

  const handleImageUpload = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file || !editor) return;

      // Create a simple preview while uploading
      const reader = new FileReader();
      reader.onload = (e) => {
        const tempUrl = e.target?.result;
        if (tempUrl) {
          editor
            .chain()
            .focus()
            .setImage({ src: tempUrl as string })
            .run();
        }
      };
      reader.readAsDataURL(file);

      // Here you would typically upload to your server/storage
      // For now, we'll just use the local URL
      try {
        // Replace this with your actual upload logic
        // const uploadedUrl = await uploadToMedusaStorage(file);
        // editor.chain().focus().setImage({ src: uploadedUrl }).run();
      } catch (error) {
        console.error("Upload failed:", error);
      }
    },
    [editor]
  );

  const addSpecificationTable = useCallback(() => {
    if (editor) {
      editor
        .chain()
        .focus()
        .insertTable({ rows: 3, cols: 2, withHeaderRow: true })
        .run();
    }
  }, [editor]);

  const insertProductHighlight = useCallback(() => {
    if (editor) {
      const highlightHTML = `
        <div class="product-highlight">
          <h3>Key Features</h3>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      `;
      editor.chain().focus().insertContent(highlightHTML).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="product-editor-container">
      {/* Custom Toolbar */}
      <div className="editor-toolbar">
        <div className="toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "active" : ""}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "active" : ""}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive("underline") ? "active" : ""}
            title="Underline"
          >
            <u>U</u>
          </button>
        </div>

        <div className="toolbar-group">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={editor.isActive("heading", { level: 2 }) ? "active" : ""}
            title="Heading 2"
          >
            H2
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={editor.isActive("heading", { level: 3 }) ? "active" : ""}
            title="Heading 3"
          >
            H3
          </button>
        </div>

        <div className="toolbar-group">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "active" : ""}
            title="Bullet List"
          >
            • List
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "active" : ""}
            title="Numbered List"
          >
            1. List
          </button>
        </div>

        <div className="toolbar-group">
          <button onClick={() => setShowImageDialog(true)} title="Add Image">
            🖼️ Image
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="image-upload"
          />
          <label htmlFor="image-upload" className="toolbar-button">
            📁 Upload
          </label>
        </div>

        <div className="toolbar-group">
          <button
            onClick={addSpecificationTable}
            title="Add Specification Table"
          >
            📋 Specs
          </button>
          <button
            onClick={insertProductHighlight}
            title="Add Product Highlight"
          >
            ⭐ Highlight
          </button>
        </div>

        <div className="toolbar-group">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={editor.isActive({ textAlign: "left" }) ? "active" : ""}
            title="Align Left"
          >
            ⬅️
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={editor.isActive({ textAlign: "center" }) ? "active" : ""}
            title="Align Center"
          >
            ↔️
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={editor.isActive({ textAlign: "right" }) ? "active" : ""}
            title="Align Right"
          >
            ➡️
          </button>
        </div>
      </div>

      {/* Enhanced Bubble Menu */}
      <BubbleMenu
        editor={editor}
        tippyOptions={{ duration: 100 }}
        className="bubble-menu"
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "active" : ""}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "active" : ""}
        >
          Italic
        </button>
        <button
          onClick={() => {
            const url = window.prompt("Enter URL:");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={editor.isActive("link") ? "active" : ""}
        >
          Link
        </button>
        <button onClick={() => setShowImageDialog(true)}>Image</button>
      </BubbleMenu>

      {/* Editor Content */}
      <div className="editor-content-wrapper">
        <EditorContent editor={editor} className="product-editor" />
      </div>

      {/* Image Dialog */}
      {showImageDialog && (
        <div className="image-dialog-overlay">
          <div className="image-dialog">
            <h3>Add Image</h3>
            <input
              type="url"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="image-url-input"
            />
            <div className="dialog-buttons">
              <button onClick={addImage} disabled={!imageUrl}>
                Add Image
              </button>
              <button onClick={() => setShowImageDialog(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Word Count */}
      <div className="editor-footer">
        <span className="word-count">
          {editor.storage.characterCount?.words() || 0} words
        </span>
      </div>
    </div>
  );
};

export default ProductDescriptionEditor;

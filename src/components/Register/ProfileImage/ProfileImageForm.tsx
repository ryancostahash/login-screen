import { useRef } from "react";
import { IconCam, IconPhoto } from "@/components/Icons/icons";
import { FormImage } from "./style";

export default function DataForm() {
  const pictureImageRef = useRef<HTMLSpanElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const pictureImageTxt = "Choose an image";

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputTarget = e.target;
    const file = inputTarget.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const readerTarget = e.target as FileReader;

        const img = document.createElement("img");
        img.src = readerTarget.result?.toString() ?? "";
        img.classList.add("picture__image");

        if (pictureImageRef.current) {
          pictureImageRef.current.innerHTML = "";
          pictureImageRef.current.appendChild(img);
        }
      });

      reader.readAsDataURL(file);
    } else {
      if (pictureImageRef.current) {
        pictureImageRef.current.innerHTML = pictureImageTxt;
      }
    }
  }

  return (
    <FormImage>
      <div className="box-content">
        <label className="picture" htmlFor="picture__input">
          <span ref={pictureImageRef} className="picture__image">
            {IconPhoto}
          </span>
          <input
            type="file"
            id="picture__input"
            name="picture__input"
            ref={inputFileRef}
            onChange={handleInputChange}
          />
        </label>
        <button>{IconCam} Adicionar Foto</button>
      </div>
    </FormImage>
  );
}

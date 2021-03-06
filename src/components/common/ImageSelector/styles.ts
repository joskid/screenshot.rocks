import {css} from "emotion";

export const styles = (imageData?: string): string => {
    return css`
          width: 100%;
          background-color: #ffffff;
          padding: 0 30px;
          min-height: ${imageData ? '40vh' : 'auto'};
          text-align: center;
          font-size: 1.2em;
          cursor: pointer;
          display: flex;
          vertical-align: middle;
          justify-content: center;
          align-items: center;
        
          .dropzone {
            border: 4px dashed #e6ecef;
            border-radius: 5px;
            padding: 20px;
            height: fit-content;
            background-color: #fbfbfb;
            margin-top: 50px;
            margin-bottom: 50px;
          }
        
          svg {
            width: 50px;
            height: auto !important;
            fill: #211540;
          }
        
          &.dragActive {
            background-color: #fff;
          }
`
};
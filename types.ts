 export type TTextStyle = {
    color: string;
    fontFamily: string;
    fontStyle: string;
    fontUrl : string;
  };
  
  export type TButtonStyle = {
    color: string;
    backgroundColor: string;
    borderColor: string;
    hoverColor: string;
    hoverBorderColor: string;
    hoverBackgroundColor: string;
    disabledColor: string;
    disabledBackgroundColor: string;
    disabledBorderColor: string;
  };
  
  export type TProjectTheme = {
    background: {
      color: string;
    };
    text: {
      heading: TTextStyle;
      paragraph: TTextStyle;
      subText: TTextStyle;
    };
    button: {
      primary: TButtonStyle;
      secondary: TButtonStyle;
    };
    components: {
      cornerRadius: number;
    };
  };
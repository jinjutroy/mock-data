export type TTextStyle = {
  color: string;
  colorOpacity?: number;
  fontFamily: string;
  fontStyle: string;
  fontUrl: string;
  fontWeight?: string | number;
};

export type TProjectTheme = {
  modeTheme: "light" | "dark";
  theme: {
    bgColorButton: {
      primary: string;
      primaryOpacity?: number;
      secondary: string;
      secondaryOpacity?: number;
    };
    background: {
      color: string;
      colorOpacity?: number;
      image?: string;
      imageOpacity?: number;
    };
  };
  components: {
    cornerRadius: number;
  };
  text: {
    heading: TTextStyle;
    paragraph: TTextStyle;
    subText: TTextStyle;
  };
  image: {
    logo: string;
    favicon: string;
    featureImage: string;
  };
};

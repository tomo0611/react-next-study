type Scene = {
  link: string;
  mainScenePath: string;
  mainSceneAlt: string;
};

export type Work = {
  workId: string;
  workInfo: {
    workTitle: string;
    link: string;
    mainKeyVisualPath: string;
    mainKeyVisualAlt: string;
    scenes: Scene[];
    myListCount: number;
    favoriteCount: number;
  };
};

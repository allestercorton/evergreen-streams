export interface Stream {
  name: string;
  src: string;
}

export interface ServerButtonProps {
  name: string;
  src: string;
  currentSrc: string;
  setCurrentSrc: (src: string) => void;
  setHasError: (hasError: boolean) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

export interface Session {
  date: string;
  time: string;
}

export interface Circuit {
  name: string;
  length_km: string;
  number_of_laps: number;
  total_distance_km: string;
  lap_record: string;
  image_url: string;
}

export interface RaceData {
  grand_prix: string;
  location: string;
  sessions: {
    race: Session;
    qualifying: Session;
    practice3?: Session;
    practice2?: Session;
    practice1: Session;
    sprint?: Session;
    sprint_qualifying?: Session;
  };
  circuit: Circuit;
}

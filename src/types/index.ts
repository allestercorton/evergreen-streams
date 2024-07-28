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
  length_km: number;
  number_of_laps: number;
  total_distance_km: number;
  image_url: string;
}

export interface Race {
  grand_prix: string;
  location: string;
  date: string;
  sessions: {
    [key: string]: Session;
  };
  circuit: Circuit;
}

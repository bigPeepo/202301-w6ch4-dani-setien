export interface GarlicBreadFact extends UnidentifiedGarlicBreadFact {
  id: string;
}

export interface UnidentifiedGarlicBreadFact {
  fact: string;
}

export type GarlicBreadFacts = GarlicBreadFact[];

1) Oui le diagramme respecte le principe de responsabilité unique

2) Oui car chaque classe à sa propre utilitée, il ni a pas de duplication de méthode inutile, tout est bien structuré même si ça peut etre mieux fait

3) Oui le diagramme respecte le principe de open/clsoed

4) Oui car utilisation du polymorphisme avec les interfaces et classes abstract. Les classes peuvent s'étendre sans impacter le code en place

5) Non le diagramme respecte le principe de substitution de Liskov

6) Non car on ne peut remplacer une instance  d'un type par un sous type sans qu'il ni est problème, mais aussi car parfois on verifie le type dans un bloc if (exemple méthode attaquer des pokemons ) 

7) Oui le diagramme respecte le principe de ségrégation des interfaces

8) Oui car bien qu'il n'y est que 2 interfaces et que celle de Pokemon parraisse grande, pour moi ce principe est respecté car déjà il y a très peu de classes et il y a 2 interfaces. Le code n'est pas poussé donc tout mettre dans l'interface Pokemon est cohérent, si le projet était plus complet là il aurait sans doute fallu couper l'interface Pokemon en sous interface mais dans ce cas là pas besoin c'est très clair et facile à implémtenter. Plus, selon moi le principe de responsabilité unique est respecté.

9) Non le diagramme respecte le principe d'inversion des dépendences

10) Non car les classes dépendent plus de l'interface pokemon que de leut abstraction (TypeEau,TypeFeu,TypePlante). Toutes les informations importantes des classes Carapuce Salamèche et Bublizarre viennent de l'interface Pokemon. Leur classe abstraite sert juste à calculer les dégats causé aux types


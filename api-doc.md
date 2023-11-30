# Documentation de l'API REST de **Note App**.

Bienvenue dans la documentation de l'API REST pour l'application **Note App**. Cette documentation fournit des informations sur les différentes fonctionnalités disponibles.

## Créer une Application

_URL_ : `/app`

_Méthode_ : `POST`

_Contraintes de données_

Fournissez le nom de l'application à créer.

```json
{
  "name": "[string]"
}
```

**Exemple de données**

```json
{
  "name": "Ma Super Application"
}
```
### Succès de la réponse

**Condition** : Si tout est OK.

**Code** : `201 CREATED`

**Exemple de contenu**

```json
{
      "success": true,
      "message": "App created successfully. AppId: sq89lzi",
    }
```

**NB** : Cet identifiant **AppId** sera utilisé partout ou on vous demande AppId.

### Réponses d'erreur

**Condition** : Si des champs sont manquants ou incorrects.

**Code** : `400 BAD REQUEST`

**Exemple de contenu**

```json
{
    "message": "Validation failed",
    "errors": [
        {
            "field": "name",
            "message": "The name is required."
        }
    ]
}
```

## Opérations sur les Notes

Effectuez diverses opérations sur les notes associées à une application spécifique.

**URL** : `/app/:appid/notes`

## Obtenir toutes les Notes

**Méthode** : `GET`

### Succès de la réponse

**Condition** : Si tout est OK.

**Code** : `200 OK`

**Exemple de contenu**

```json
[
    {
        "id": "identifiant_unique",
        "title": "Note existante",
        "text": "Contenu de la note",
        "createdAt": "horodatage",
        "updatedAt": "horodatage",
        "isFavorite": false
    }
]
```

### Réponses d'erreur

**Condition** : Si une erreur inattendue se produit.

**Code** : `500 INTERNAL SERVER ERROR`

**Exemple de contenu**

```json
{
    "message": "Une erreur inattendue s'est produite",
    "cause": "Détails de l'erreur"
}
```

## Créer une Note

**Méthode** : `POST`

**Contraintes de données**

Fournissez le titre et le texte de la note à créer.

```json
{
    "title": "[string]",
    "text": "[string]"
}
```

**Exemple de contenu**

```json
{
    "title": "Nouvelle Note",
    "text": "Contenu de la note"
}
```

### Succès de la réponse

**Condition** : Si tout est OK.

**Code** : `201 CREATED`

**Exemple de contenu**

```json
{
    "id": "identifiant_unique",
    "title": "Nouvelle Note",
    "text": "Contenu de la note",
    "createdAt": "horodatage",
    "updatedAt": "horodatage",
    "isFavorite": false
}
```

### Réponses d'erreur

**Condition** : Si des champs sont manquants ou incorrects.

**Code** : `400 BAD REQUEST`

**Exemple de contenu**

```json
{
    "message": "Validation échouée",
    "errors": [
        {
            "field": "title",
            "message": "Le titre est requis."
        }
    ]
}
```

## Mettre à jour une Note

**URL** : `/app/:appid/notes/:id`

**Méthode** : `PATCH`

**Contraintes de données**

Fournissez le titre et/ou le texte mis à jour de la note.

```json
{
    "title": "[string]",
    "text": "[string]"
}
```

**Exemple de données**

```json
{
    "title": "Nouveau Titre",
    "text": "Nouveau Contenu de la note"
}

```

### Succès de la réponse

**Condition** : Si tout est OK.

**Code** : `200 OK`

**Exemple de contenu**

```json
{
    "id": "identifiant_unique",
    "title": "Nouveau Titre",
    "text": "Nouveau Contenu de la note",
    "createdAt": "horodatage",
    "updatedAt": "horodatage",
    "isFavorite": false
}
```
### Réponses d'erreur

**Condition** : Si des champs sont manquants ou incorrects.

**Code** : `400 BAD REQUEST`

**Exemple de contenu**

```json
{
    "message": "Validation échouée",
    "errors": [
        {
            "field": "title",
            "message": "Le titre est requis."
        }
    ]
}
```

**Condition** : Si la note spécifiée n'existe pas.

**Code** : `404 NOT FOUND`

**Exemple de contenu**

```json
{
    "status": 404,
    "reason": "Note non trouvée"
}
```
**Condition** : Si une erreur inattendue se produit.

**Code** : `500 INTERNAL SERVER ERROR`

**Exemple de contenu**

```json
{
    "message": "Une erreur inattendue s'est produite",
    "cause": "Détails de l'erreur"
}
```

## Basculer l'état Favori de la Note

**URL** : `/app/:appid/notes/:id/toggle-favorite`

**Méthode** : `POST`

### Succès de la réponse

**Condition** : Si tout est OK.

**Code** : `200 OK`

**Exemple de contenu**

```json
{
    "id": "identifiant_unique",
    "title": "Titre de la note",
    "text": "Contenu de la note",
    "createdAt": "horodatage",
    "updatedAt": "horodatage",
    "isFavorite": true
}
```

### Réponses d'erreur

**Condition** : Si la note spécifiée n'existe pas.

**Code** : `404 NOT FOUND`

**Exemple de contenu**

```json
{
    "status": 404,
    "reason": "Note non trouvée"
}
```

**Condition** : Si une erreur inattendue se produit.

**Code** : `500 INTERNAL SERVER ERROR`

**Exemple de contenu**

```json
{
    "message": "Une erreur inattendue s'est produite",
    "cause": "Détails de l'erreur"
}
```

## Supprimer une Note

**URL** : `/app/:appid/notes/:id`

**Méthode** : `DELETE`

### Succès de la réponse

**Condition** : Si tout est OK.

**Code** : `204 NO CONTENT`

**Remarque** : Aucun contenu n'est renvoyé en cas de succès, seulement le code de statut.

### Réponses d'erreur

**Condition** : Si la note spécifiée n'existe pas.

**Code** : `404 NOT FOUND`

**Exemple de contenu**

```json
{
    "status": 404,
    "reason": "Note non trouvée"
}
```

**Condition** : Si une erreur inattendue se produit.

**Code** : `500 INTERNAL SERVER ERROR`

**Exemple de contenu**

```json
{
    "message": "Une erreur inattendue s'est produite",
    "cause": "Détails de l'erreur"
}
```

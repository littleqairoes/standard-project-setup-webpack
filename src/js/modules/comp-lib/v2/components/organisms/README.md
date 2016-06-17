### CLBody



Serves as container of the components of a CLLayout.

**Parameters**

-   `addClasses` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Adds optional classes.
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**

### CLCardClickableBody



Adds a clickable layer on top of CLCard.

**Parameters**

-   `addClasses` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Adds optional classes.
-   `cardActionHandler` **\[[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)]** Specifies what action is the trigger. (optional, default `"onClick"`)
-   `string`  {cardHref="#"}
-   `hideOnLargeScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `hideOnSmallScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**

### CLCardThumbnailBody



Adds a thumbnail within CLCard.

**Parameters**

-   `hideOnLargeScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `hideOnSmallScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**
-   `noSpacing` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Adds a padding around the thumbnail. (optional, default `false`)
-   `thumbnail` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Source of the thumbnail.
-   `thumbnailHref` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** URL of where the thumbnail redirect if clicked. (optional, default `"#"`)

### CLCard



Adds a Card component.

**Parameters**

-   `addClasses` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Adds optional classes.
-   `background` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Specifies the background color of the card.
-   `forceWidth` **\[[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Specifies the card width in px regardless of the elements around it. Input a string if you want to use percentage e.g. "500%". (optional, default `"100%"`)
-   `height` **\[[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Specifies the card height in px. Input a string if you want to use percentage e.g. "500%".
-   `hideOnLargeScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `hideOnSmallScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**
-   `minWidth` **\[[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Specifies the minimum width the card can be resized to. Input a string if you want to use percentage e.g. "500%".
-   `shadow` **\[[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Adds shadow to the card border. The only valid inputs are 0, 2, 3, 4, 8, and 16. See [Elevation and shadows](https://material.google.com/what-is-material/elevation-shadows.html) in the Google Material Design Spec. (optional, default `2`)
-   `width` **\[[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Specifies the maximum width the card can be resized to. Input a string if you want to use percentage e.g. "500%".

### CLDrawer



Adds a drawer component.

**Parameters**

-   `addClasses` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Adds optional classes.
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**

### CLForm



Adds a CLForm component.

**Parameters**

-   `addClasses` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Adds optional classes.
-   `data` **\[[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]** This is data that gets preloaded to the form. THis is helpful for when a user is updating and the form should already be populated.
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**
-   `shadow` **\[[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Adds shadow to the form border. The only valid inputs are 0, 2, 3, 4, 8, and 16. See [Elevation and shadows](https://material.google.com/what-is-material/elevation-shadows.html) in the Google Material Design Spec. (optional, default `0`)

### CLHeaderRow



Adds a row-container in CLHeader.

**Parameters**

-   `addClasses` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Adds optional classes.
-   `hideOnLargeScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `hideOnSmallScreen` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]**  (optional, default `false`)
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**

### CLHeader



Adds a CLHeader component.

**Parameters**

-   `addClasses` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** Adds optional classes.
-   `hideTopOnWaterfall` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Makes the top row of the header disappear on slide instead of the bottom. `isWaterfall` should be set to true. (optional, default `false`)
-   `id` **\[[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]**
-   `isScrollable` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** The header disappears on scroll. (optional, default `false`)
-   `isSeamed` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** The header loses its shadow beneath. (optional, default `false`)
-   `isTransparent` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** Makes the header transparent. (optional, default `false`)
-   `isWaterfall` **\[[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)]** The header slides up and disappears upon scrolling down. (optional, default `false`)

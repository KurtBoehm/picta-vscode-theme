# Picta VS Code Themes

_Picta_ (Latin “decorated, painted, coloured”) is a fork of the GitHub VS Code themes providing much more complete source code highlighting with a modified and extended colour palette:

<p align="center">
  <a title="Learn more about Bookmarks" href="http://github.com/KurtBoehm/picta-vscode-theme"><img src="https://raw.githubusercontent.com/KurtBoehm/picta-vscode-theme/refs/heads/main/gh/swatch.png" alt="Bookmarks Logo" width="50%" /></a>
</p>

These colours have the following general meanings:

| Colour | Meaning            | Notes                                                          |
| ------ | ------------------ | -------------------------------------------------------------- |
| Red    | Keywords           |                                                                |
| Orange | Variables          | more reddish than GitHub orange to make space for Picta yellow |
| Yellow | Unknown            | **new colour**                                                 |
| Olive  | _None_             | **new colour**                                                 |
| Green  | Functions          |                                                                |
| Cyan   | _None_             | **new colour**                                                 |
| Blue   | Enums              | A different shade is used for literals                         |
| Indigo | Types              | more blueish than GitHub purple to make space for Picta purple |
| Purple | Concepts (C++)     | **new colour**                                                 |
| Pink   | Modules/Namespaces | more reddish than GitHub pink to make space for Picta purple   |

Furthermore, _italic_ identifiers represent member variables/functions (attributes/methods in OOP parlance) and **bold** represents function/type/template parameters.
The _Extended_ themes additionally underline constants (if the language support is able to determine immutability).

The extended themes look as follows when applied to a C++ program using `clangd`:

![Screenshots](https://raw.githubusercontent.com/KurtBoehm/picta-vscode-theme/refs/heads/main/gh/screenshot.png)

## Install

1. Go to [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=KurtBoehm.picta-vscode-theme).
2. Click on the "Install" button.
3. Then [select a theme](https://code.visualstudio.com/docs/getstarted/themes#_selecting-the-color-theme):
   - `Picta Light`
   - `Picta Light Extended`
   - `Picta Dark`
   - `Picta Dark Extended`

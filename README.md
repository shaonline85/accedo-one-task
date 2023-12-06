# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

######################################################### ACCEDO TASK ################################################################

# Media player

Create a React media application which is capable of doing basic video player functionalities.

Note: Having proper design is always nice to have but is not a must. We are mainly curious about the core logic of the application. Please feel free to have bare minimum styling for the elements.

## Playlist

The player has a default playlist of 3 media by default. To create the playlist pick any 3 of the publicly available media (https://gist.github.com/jsturgis/3b19447b304616f18657).
In addition to the default playlist the player should also allow the user to add/remove urls. Error handling is not necessary, we can assume that the user always provides a url with valid media. All the items from the playlist should be visible to the user and the currently played one should be in bold.

- Create a list of media from the playback
- Highlight the currently played media by making the text bold

### Adding media to playlist

It should add the url to the playlist upon pressing enter in the input or clicking on the submit button

- Create a text input
- Create a submit button

### Removing media from the playlist

- Create a remove button next to each of the media items

## Player controls

### Functionalities

- Go to previous media (`assets/previous.svg`)
  - Go to the previous item from the playlist. Goes to the last media if the player was on the first.
- Fast backwards 10 seconds (`assets/backward.svg`)
  - Rewind the media by 10 seconds
- Play/pause button (`assets/play.svg` and `assets/pause.svg`)
  - The buttons should be in the same position in the middle of the controls
  - Show play button when the player is paused and show pause button when the content is playing
- Fast forwards 10 seconds (`assets/forward.svg`)
  - Advances time by 10 seconds
- Go to next media (`assets/next.svg`)
  - Go to the next item from the playlist. Goes to the first media if the player was on the last.

### Design

The controls should have unique icons. Please find them in the `assets/` folder.

#### Media is playing

```
| ⏮ | ⏪ | ⏸ | ⏩ | ⏭ |
```

#### Media is paused

```
| ⏮ | ⏪ | ⏵ | ⏩ | ⏭ |
```

## Submission

Your solution can be emailed back to us as a Zip file, or uploaded to any git solution you'd like with a link to the public/private repository.

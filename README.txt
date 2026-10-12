REVERIE WEBSITE — FILE SPLIT

The HTML entry file is now small. Large data payloads are stored in assets/ and JavaScript is stored in js/. Keep the folders in this exact relative layout.

To test locally, open this folder in VS Code and use Live Server. Do not open index.html directly with file:// because the page fetches JSON files and browsers block local fetches.

For Netlify or Vercel, deploy the entire reverie_fixed folder (not index.html alone).

For Wix, this folder cannot simply be pasted into a single Wix HTML embed. Host the folder on a static host and embed/link the hosted website, or adapt the site to Wix's hosting and security model.

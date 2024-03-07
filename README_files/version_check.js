////////////////////////////////////////////////////////////////////////
//
// Copyright (C) 2022 The Octave Project Developers
//
// See the file COPYRIGHT.md in the top-level directory of this
// distribution or <https://octave.org/copyright/>.
//
// This file is part of Octave.
//
// Octave is free software: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Octave is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Octave; see the file COPYING.  If not, see
// <https://www.gnu.org/licenses/>.
//
////////////////////////////////////////////////////////////////////////


// Helper function to determine a newer version of the Octave HTML manual.
//
// Assume the latest Octave version is "6.4.0" and a friendly web search
// engine provided the following URL to an older Octave HTML manual:
//
//   https://octave.org/doc/v4.2.1/Finding-Roots.html
//
//   https://octave.org/doc/v6.4.0/Finding-Roots.html
//
// To find the latter URL for the latest Octave HTML manual, this helper
// function adds a banner to the top of the page and reports an updated
// link to the current page, if it exists (sometimes pages change or functions
// get deprecated and deleted).
//
// To inject the version check to a Texinfo generated Octave HTML manual,
// run the following sed-one-liner:
//
//   sed -i 's|</head>|<script type="text/javascript" src="../version_check.js"></script>\n</head>|' v6.4.0/[^XREF]*.html
//

document.addEventListener("DOMContentLoaded", function(event) {

const latestOctaveVersion = '/v8.4.0/';  // must be enclosed in '/'
const regex = /\/v\d+.\d+.\d+\//;
const message = `
  This is an old version of the Octave manual.
  Find the latest version at:
  <a href="https://docs.octave.org/latest">https://docs.octave.org/latest</a>.
`;
const css = `
  margin: auto;
  padding: 5px;
  border: 1px solid gray;
  background-color: #d4f1ff;
`;

// Get the current URL.
var url = window.location.href;

// Get the version, e.g. '/v6.4.0/', from the current URL.
var currentVersion = url.match(regex);
if (currentVersion) {
  currentVersion = currentVersion[0];
} else {
  return;
}
// Finished, if version matches the latest.
if (latestOctaveVersion.localeCompare(currentVersion) === 0) {
  return;
}

// Display notification on top of the page.
var versionDiv = document.createElement('div');
versionDiv.innerHTML = message;
versionDiv.style.cssText = css;
document.body.insertBefore(versionDiv,document.body.firstChild);

// Try to determine an updated version of current page for convenience.
url = url.replace(regex, latestOctaveVersion);
try {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onreadystatechange = function(){
    if (request.readyState === 4){
      if (request.status === 200) {
        versionDiv.innerHTML = message
          + '<br><br>Latest version of this page: '
          + '<a href="' + url + '">' + url + '</a>';
      }
    }
  };
  request.send();
} catch {
  // Ignore failures.
}

});


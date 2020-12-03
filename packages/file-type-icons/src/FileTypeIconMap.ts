/**
 * Enumeration of icon file names, and what extensions they map to.
 * Please keep items alphabetical. Items without extensions may require specific logic in the code to map.
 * Always use getFileTypeIconProps to get the most up-to-date icon at the right pixel density.
 */
export const FileTypeIconMap: { [key: string]: { extensions?: string[] } } = {
  accdb: {
    extensions: ['accdb', 'mdb'],
  },
  archive: {
    extensions: ['7z', 'ace', 'arc', 'arj', 'dmg', 'gz', 'iso', 'lzh', 'pkg', 'rar', 'sit', 'tgz', 'tar', 'z'],
  },
  audio: {
    extensions: [
      'aif',
      'aiff',
      'aac',
      'alac',
      'amr',
      'ape',
      'au',
      'awb',
      'dct',
      'dss',
      'dvf',
      'flac',
      'gsm',
      'm4a',
      'm4p',
      'mid',
      'mmf',
      'mp3',
      'oga',
      'ra',
      'rm',
      'wav',
      'wma',
      'wv',
    ],
  },
  calendar: {
    extensions: ['ical', 'icalendar', 'ics', 'ifb', 'vcs'],
  },
  code: {
    extensions: [
      'abap',
      'ada',
      'adp',
      'ahk',
      'as',
      'as3',
      'asc',
      'ascx',
      'asm',
      'asp',
      'awk',
      'bash',
      'bash_login',
      'bash_logout',
      'bash_profile',
      'bashrc',
      'bat',
      'bib',
      'bsh',
      'build',
      'builder',
      'c',
      'cbl',
      'c++',
      'capfile',
      'cc',
      'cfc',
      'cfm',
      'cfml',
      'cl',
      'clj',
      'cls',
      'cmake',
      'cmd',
      'coffee',
      'config',
      'cpp',
      'cpt',
      'cpy',
      'cs',
      'cshtml',
      'cson',
      'csproj',
      'css',
      'ctp',
      'cxx',
      'd',
      'ddl',
      'di',
      'disco',
      'dml',
      'dtd',
      'dtml',
      'el',
      'emakefile',
      'erb',
      'erl',
      'f',
      'f90',
      'f95',
      'fs',
      'fsi',
      'fsscript',
      'fsx',
      'gemfile',
      'gemspec',
      'gitconfig',
      'go',
      'groovy',
      'gvy',
      'h',
      'h++',
      'haml',
      'handlebars',
      'hbs',
      'hcp',
      'hh',
      'hpp',
      'hrl',
      'hs',
      'htc',
      'hxx',
      'idl',
      'iim',
      'inc',
      'inf',
      'ini',
      'inl',
      'ipp',
      'irbrc',
      'jade',
      'jav',
      'java',
      'js',
      'json',
      'jsp',
      'jsproj',
      'jsx',
      'l',
      'less',
      'lhs',
      'lisp',
      'log',
      'lst',
      'ltx',
      'lua',
      'm',
      'mak',
      'make',
      'manifest',
      'master',
      'md',
      'markdn',
      'markdown',
      'mdown',
      'mkdn',
      'ml',
      'mli',
      'mll',
      'mly',
      'mm',
      'mud',
      'nfo',
      'opml',
      'osascript',
      'p',
      'pas',
      'patch',
      'php',
      'php2',
      'php3',
      'php4',
      'php5',
      'phtml',
      'pl',
      'pm',
      'pod',
      'pp',
      'profile',
      'ps1',
      'ps1xml',
      'psd1',
      'psm1',
      'pss',
      'pt',
      'py',
      'pyw',
      'r',
      'rake',
      'rb',
      'rbx',
      'rc',
      'rdf',
      're',
      'reg',
      'rest',
      'resw',
      'resx',
      'rhtml',
      'rjs',
      'rprofile',
      'rpy',
      'rss',
      'rst',
      'ruby',
      'rxml',
      's',
      'sass',
      'scala',
      'scm',
      'sconscript',
      'sconstruct',
      'script',
      'scss',
      'sgml',
      'sh',
      'shtml',
      'sml',
      'svn-base',
      'swift',
      'sql',
      'sty',
      'tcl',
      'tex',
      'textile',
      'tld',
      'tli',
      'tmpl',
      'tpl',
      'vb',
      'vi',
      'vim',
      'vmg',
      'webpart',
      'wsp',
      'wsdl',
      'xhtml',
      'xoml',
      'xsd',
      'xslt',
      'yaml',
      'yaws',
      'yml',
      'zsh',
    ],
  },
  contact: {
    extensions: ['vcf'],
  },
  /*  css: {},  not broken out yet, snapping to 'code' for now */
  csv: {
    extensions: ['csv'],
  },
  desktopfolder: {},
  docset: {},
  documentfolder: {},
  docx: {
    extensions: ['doc', 'docm', 'docx', 'docb'],
  },
  dotx: {
    extensions: ['dot', 'dotm', 'dotx'],
  },
  email: {
    extensions: ['eml', 'msg', 'ost', 'pst'],
  },
  exe: {
    extensions: ['application', 'appref-ms', 'apk', 'app', 'appx', 'exe', 'ipa', 'msi', 'xap'],
  },
  folder: {},
  font: {
    extensions: ['ttf', 'otf', 'woff'],
  },
  fluid: {
    extensions: ['b', 'fluid'],
  },
  genericfile: {},
  html: {
    extensions: ['htm', 'html', 'mht'],
  },
  link: {
    extensions: ['lnk', 'link', 'url', 'website', 'webloc'],
  },
  linkedfolder: {},
  listitem: {},
  officescript: {
    extensions: ['osts'],
  },
  splist: {
    extensions: ['listitem'],
  },
  model: {
    extensions: [
      '3ds',
      '3mf',
      'blend',
      'cool',
      'dae',
      'df',
      'dwfx',
      'dwg',
      'dxf',
      'fbx',
      'glb',
      'gltf',
      'holo',
      'layer',
      'layout',
      'max',
      'mcworld',
      'mtl',
      'obj',
      'off',
      'ply',
      'skp',
      'stp',
      'stl',
      't',
      'thl',
      'x',
    ],
  },
  mpp: {
    extensions: ['mpp'],
  },
  mpt: {
    extensions: ['mpt'],
  },
  multiple: {},
  one: {
    // This represents a single Fluid Note, or a partial exported section/page of a notebook.
    extensions: ['note', 'one'],
  },
  onetoc: {
    extensions: ['ms-one-stub', 'onetoc', 'onetoc2', 'onepkg'], // This represents a complete, logical notebook.
  },
  pbiapp: {},
  pdf: {
    extensions: ['pdf'],
  },
  photo: {
    extensions: [
      'arw',
      'bmp',
      'cr2',
      'crw',
      'dic',
      'dicm',
      'dcm',
      'dcm30',
      'dcr',
      'dds',
      'dib',
      'dng',
      'erf',
      'gif',
      'heic',
      'heif',
      'ico',
      'jfi',
      'jfif',
      'jif',
      'jpe',
      'jpeg',
      'jpg',
      'kdc',
      'mrw',
      'nef',
      'orf',
      'pct',
      'pict',
      'png',
      'pns',
      'psb',
      'psd',
      'raw',
      'tga',
      'tif',
      'tiff',
      'wdp',
    ],
  },
  photo360: {},
  picturesfolder: {},
  potx: {
    extensions: ['pot', 'potm', 'potx'],
  },
  powerbi: {
    extensions: ['pbids', 'pbix'],
  },
  ppsx: {
    extensions: ['pps', 'ppsm', 'ppsx'],
  },
  pptx: {
    extensions: ['ppt', 'pptm', 'pptx', 'sldx', 'sldm'],
  },
  presentation: {
    extensions: ['odp', 'gslides', 'key'],
  },
  pub: {
    extensions: ['pub'],
  },
  spo: {
    extensions: ['aspx', 'classifier'],
  },
  sponews: {},
  spreadsheet: {
    extensions: ['odc', 'ods', 'gsheet', 'numbers', 'tsv'],
  },
  stream: {},
  rtf: {
    extensions: ['epub', 'gdoc', 'odt', 'rtf', 'wri', 'pages'],
  },
  sharedfolder: {},
  sway: {},
  sysfile: {
    extensions: [
      'bak',
      'bin',
      'cab',
      'cache',
      'cat',
      'cer',
      'class',
      'dat',
      'db',
      'dbg',
      'dl_',
      'dll',
      'ithmb',
      'jar',
      'kb',
      'ldt',
      'lrprev',
      'pkpass',
      'ppa',
      'ppam',
      'pdb',
      'rom',
      'thm',
      'thmx',
      'vsl',
      'xla',
      'xlam',
      'xlb',
      'xll',
    ],
  },
  txt: {
    extensions: ['dif', 'diff', 'readme', 'out', 'plist', 'properties', 'text', 'txt'],
  },
  vaultclosed: {},
  vaultopen: {},
  vector: {
    extensions: [
      'ai',
      'ait',
      'cvs',
      'dgn',
      'gdraw',
      'pd',
      'emf',
      'eps',
      'fig',
      'ind',
      'indd',
      'indl',
      'indt',
      'indb',
      'ps',
      'svg',
      'svgz',
      'wmf',
      'oxps',
      'xps',
      'xd',
      'sketch',
    ],
  },
  video: {
    extensions: [
      '3g2',
      '3gp',
      '3gp2',
      '3gpp',
      'asf',
      'avi',
      'dvr-ms',
      'flv',
      'm1v',
      'm4v',
      'mkv',
      'mod',
      'mov',
      'mm4p',
      'mp2',
      'mp2v',
      'mp4',
      'mp4v',
      'mpa',
      'mpe',
      'mpeg',
      'mpg',
      'mpv',
      'mpv2',
      'mts',
      'ogg',
      'qt',
      'swf',
      'ts',
      'vob',
      'webm',
      'wlmp',
      'wm',
      'wmv',
      'wmx',
    ],
  },
  video360: {},
  vsdx: {
    extensions: ['vdx', 'vsd', 'vsdm', 'vsdx', 'vsw', 'vdw'],
  },
  vssx: {
    extensions: ['vss', 'vssm', 'vssx'],
  },
  vstx: {
    extensions: ['vst', 'vstm', 'vstx', 'vsx'],
  },
  whiteboard: {},
  xlsx: {
    extensions: ['xlc', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xlw'],
  },
  xltx: {
    extensions: ['xlt', 'xltm', 'xltx'],
  },
  xml: {
    extensions: ['xaml', 'xml', 'xsl'],
  },
  xsn: {
    extensions: ['xsn'],
  },
  zip: {
    extensions: ['zip'],
  },
};

type ImageInfo = [string, string, string, string]

const images: ImageInfo[] = [
  [
    'stien-279c7.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Skilt som peker i retningen mot Småbruket ved Brunkollen.',
  ],
  [
    'stien-872f2.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Småbruket ligger like ved stien mellom Brunkollen og Muren.',
  ],
  [
    'utsikt-0717d.jpg',
    '2010-10-20',
    'Henrik Steen',
    'Flott utsikt utover Oslofjorden.',
  ],
  [
    'hytta-5711a.jpg',
    '2013-10-06',
    'Henrik Steen',
    'Småbruket tar seg vakkert ut i Bærumsmarka.',
  ],
  [
    'kjokken-1b419.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Hytta kan by på et moderne kjøkken. Vann hentes fra utebrønnen. Nytt kjøleskap og komfyr kjøpt inn i 2012 (ikke på bilde).',
  ],
  [
    'kjokken-870d7.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Hytta kan by på et moderne kjøkken. Vann hentes fra utebrønnen.',
  ],
  [
    'kjokken-fb00a.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Hytta er godt utstyrt med mye servise, og har alt som skal til for å ta i mot en stor gruppe på tur. Hvis noe mangler, setter vi pris på beskjed så vi kan fylle på med nytt.',
  ],
  [
    'badstua-7fc7c.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Flott vedfyrt badstue. I kombinasjon med badestampen kan det by på en skikkelig opplevelse.',
  ],
  [
    'dusjene-bfecc.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Dusjene fylles med vann manuelt. Varmekabler på gulvet.',
  ],
  [
    'ny-sittegruppe-379d2.jpg',
    '2011-10-02',
    'Henrik Steen',
    'Hyttestyret organiserer alt vedlikehold, hovedsaklig gjennom hyttedugnadene, her fra bygging av nye sittegrupper høsten 2011.',
  ],
  [
    'annekset-078d0.jpg',
    '2011-08-02',
    'Henrik Steen',
    'I annekset er det fire soverom med 2 køyesenger i hvert rom.',
  ],
  [
    'stamp-7b0ab.jpg',
    '2014-05-03',
    'Bjørn Klevmark',
    'Småbrukets nye badestamp ble stor suksess under innvielse på hyttedugnaden våren 2014.',
  ],
  [
    'soverom-5391e.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Hovedsoverommet med 8 soveplasser. I tillegg er det 16 senger i annekset og 10 madrasser på hemsen.',
  ],
  [
    'stua-8bd7b.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Den store stua er perfekt for f.eks. seminarer, foreningskurs eller sosiale leker.',
  ],
  [
    'stua-afb7f.jpg',
    '2011-08-02',
    'Henrik Steen',
    'Den store stua er perfekt for f.eks. seminarer, foreningskurs eller sosiale leker.',
  ],
  [
    'stua-bba2b.jpg',
    '2011-08-02',
    'Henrik Steen',
    'På veggen henger det musikkboks med AUX-tilkobling og radio, som gir godt med lyd på hytta.',
  ],
  [
    'utedoens-plikter-6b20b.jpg',
    '2013-10-05',
    'Henrik Steen',
    'Utedoen må tømmes!',
  ],
  [
    'pygmetur-middag-83829.jpg',
    '2011-08-26',
    'Henrik Steen',
    'Stua rommer en hel folkemasse. Her fra tur med hele 49 personer, hvor også alle overnattet. Rekorden de siste årene har vært 53 personer på middag og overnatting.',
  ],
  [
    'baalkos-hyttedugnad-d7f57.jpg',
    '2012-09-30',
    'Henrik Steen',
    'Når kvelden kommer er det veldig hyggelig å fyre bål ute. Her fra hyttedugnad hvor vi hadde litt ekstra å brenne fra opprydding.',
  ],
  [
    'bjelken-27373.jpg',
    '2011-02-18',
    'Henrik Steen',
    'Når bjelken tas i bruk er kvelden fullkommen!',
  ],
  [
    'hyttedugnad-3baf1.jpg',
    '2013-10-05',
    'Henrik Steen',
    'Hvert semester arrangerer hyttestyret hyttedugnad, hvor beboere fra Blindern Studenterhjem bidrar til å vedlikeholde og fornye hytta!',
  ],
  ['peiskos-b70dc.jpg', '2012-05-05', 'Henrik Steen', ''],
  [
    'pygmetur-underholdning-cfedc.jpg',
    '2013-08-31',
    'Henrik Steen',
    'Hyttestyret arrangerer også sosiale turer, dog for beboere ved Blindern Studenterhjem. Her fra pygmétur på høsten, som inkluderer rebusløp med tilhørende presentasjoner og annet moro.',
  ],
]

function buildDesc(date: string, author: string, desc: string) {
  const result = []
  if (desc !== '') {
    result.push(desc)
  }
  if (author !== '') {
    result.push(`Foto: ${author}`)
  }
  if (date !== '') {
    result.push(`(${date})`)
  }
  return result.join(' ')
}

const Images = () => (
  <div className='card-columns'>
    {images.map(([path, date, author, desc]) => (
      <div className='card' key={path} style={{ width: '20rem' }}>
        <a href={`bilder/store/${path}`}>
          <img
            className='card-img-top'
            src={`bilder/thumb/${path}`}
            data-caption={buildDesc(date, author, desc)}
            alt=''
          />
        </a>
        <div className='card-body'>
          <p className='card-text'>{buildDesc(date, author, desc)}</p>
        </div>
      </div>
    ))}
  </div>
)

export default Images

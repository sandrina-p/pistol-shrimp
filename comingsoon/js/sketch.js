//function preload() { startGibber() }
function setup() {
  createCanvas( windowWidth, windowHeight )

  drums = EDrums( 'x*x*x*x*' )
  drums.fx.add( Distortion(10), Flanger() )
  b = Gain({ amp: 1.5 })
  drums.fx.add( b )

  sampler = Sampler().record( drums, 2 )
    .note.seq( [.5,1,2,4].rnd(), [1/4,1/8,1/2].rnd() )
    .fx.add( Delay(1))
    .pan.seq( Rndf(-1,1) )

  synth = Synth2({ maxVoices:4, amp:1.3, resonance:2 })
  .chord.seq( [ [0,1,2,4] ], 1/4 )
  .cutoff.seq( [.1,.2,.3,.4], 1/4 )


  Gibber.scale.root.seq( ['e4','c4','a3','a3'], 2 )

  follow = Follow( Gibber.Master, 1024 )

  smooth()
  background( 64 )
  noFill()
  stroke( 0 )
}

function draw() {
  var x = mouseX / windowWidth,
      y = mouseY / windowHeight,
      ww2 = windowWidth / 2,
      wh2 = windowHeight / 2,
      value = follow.getValue(),
      radius = ( ww2 > wh2 ? wh2 : ww2 ) * value

  synth.resonance = (1 - x) * 5
  synth.cutoff = (1.05 - y) / 2

  sampler.fx[0].feedback = x < .99 ? x : .99

  strokeWeight( value * 20 )
  background( mouseX/4, mouseY )
  ellipse( ww2, wh2, 250+radius*x*2, 250+radius*x*2 )
}
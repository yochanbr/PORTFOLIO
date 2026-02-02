const reels = [
  {
    id: '01',
    title: 'Kinda Cinematic',
    src: '/reel-01.mp4',
  },
  {
    id: '02',
    title: 'The Break',
    src: '/reel-02.mp4',
  },
  {
    id: '03',
    title: 'Phonk × Car',
    src: '/reel-03.mp4',
  },
  {
    id: '04',
    title: 'Friendship Sorry',
    src: '/reel-04.mp4',
  },
  {
    id: '05',
    title: 'Bullet Bike',
    src: '/reel-05.mp4',
  },
  {
    id: '06',
    title: 'The Player',
    src: '/reel-06.mp4',
  },
  {
    id: '07',
    title: 'Kalyani',
    src: '/reel-07.mp4',
  },
]

export default function MobileReels() {
  return (
    <section className="mobile-reels">
      {reels.map((reel) => (
        <div key={reel.id} className="mobile-reel-card">
          <video
            src={reel.src}
            playsInline
            muted
            preload="none"
            controls
          />
          <div className="reel-meta">
            <span>{reel.title}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

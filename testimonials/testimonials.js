let testimony = document.getElementById("testimony");
let mouse = {
    x: -1000,
    y: -1000,
};
let expanded = expan(testimony.innerText);
let count = expanded.length;
testimony.innerHTML = expanded.html;
window.requestAnimationFrame(weightset);

function weightset() {
    for (let i = 0; i < count - 1; i++) {
        let span = document.getElementById("char_" + i);
        // since Math.hypot is slow.. we do it this ugly way
        let x1 = mouse.x;
        let y1 = mouse.y;
        let x2 = span.getBoundingClientRect().left + (span.getBoundingClientRect().width / 2);
        let y2 = span.getBoundingClientRect().top + document.documentElement.scrollTop + (span.getBoundingClientRect().height / 2);
        let a = x1 - x2;
        let b = y1 - y2;
        let c = Math.sqrt(a * a + b * b);
        c = c * 2;
        let topweight = 800;
        c = clamp(c, 1, topweight);

        let scale = topweight / document.documentElement.clientWidth;
        let calcedweight = topweight - Math.trunc(Math.abs(c * scale));

        span.style["font-variation-settings"] = "'wght' " + calcedweight;
    }
    window.requestAnimationFrame(weightset);
}

// let's explode the text into spans. [exp]lode-sp[an]
// 
function expan(text, granularity) {
    // for short strings spltting by each char is nice
    // let chars = Array.from(text);
    // but since that's slow 
    let split = ' ';
    let chars = text.split(split);
    let shards = [];
    let index = 0;
    for (let char of chars) {
        let shard = '<span id="char_' + index + '" class="fontbeam">' + char + split + '</span>';
        shards.push(shard);
        index++;
    }
    return {
        'html': shards.join(split),
        'length': index + 1,
    };
}

document.addEventListener('mousemove', (event) => {
    mouse = { x: event.clientX, y: event.clientY };
});

// https://stackoverflow.com/a/11410079
function clamp(current, min, max) {
    return current <= min ? min : current >= max ? max : current;
}

let testimonials = [
    {
        'category': '',
        'location': '',
        'name': 'FB',
        'testimony': 'I always looked forward to Friday. They always had a variety of activities, which meant we got the learn the same skill but in lots of different ways.',
    },
    {
        'category': 'MANAGER',
        'location': 'Somerville Primary School ',
        'name': 'Miss Merry – Social inclusion manager',
        'testimony': 'The children were mesmerised by Kris and the team. They really allowed the children to explore and challenges themselves. Ensuring they knew that making mistakes was okay. The confidence our children now have is down to the dedication and hard work from Kris and the team. Our children now want to go and create their own activities and have the confidence to do this themselves.',
    },
    {
        'category': 'TEACHER',
        'location': 'Egremont Primary school',
        'name': 'Mrs Speight - Assistant  Head',
        'testimony': 'I would say that your sessions are carefully planned out and the children are engaged. You identify areas of weakness for the class and very perceptive to their needs and adapt plans accordingly. You are firm but fair and know how to motivate the children so they reflect on their actions. ',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'JR',
        'testimony': 'We learnt to communicate more effectively and we were able to resolve any conflict.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'CS',
        'testimony': 'I really enjoyed creating our own games and loved our certificate at the end to say we’d passed.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'KP',
        'testimony': 'Kris and his team taught us how to play and plan games safely.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'LG',
        'testimony': 'It really helped improve my fitness, especially after being in lockdown.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'TBF',
        'testimony': 'Kris and his team helped me build my confidence. I now feel more confident joining in with other children’s games.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'LMD',
        'testimony': 'I enjoyed working together in a group and helping eachother.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'LM',
        'testimony': 'I think the sessions are amazing, educational and inspiring!',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'MD',
        'testimony': 'Every session has improved my fitness and my mental health.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'CS',
        'testimony': 'We all worked well to help and support each other.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'RM',
        'testimony': 'I would recommend ‘Break the Mould’ because it is great fun and you don’t actually realise you’re getting some exercise in too!',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'LG',
        'testimony': 'I would recommend ‘Break the Mould’ because Kris and his team made us feel safe and supported. They also made us feel special because they always listened and offered us advice to improve in a nice way.',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'AC',
        'testimony': 'I would recommend ‘Break the Mould’ because it is great fun and educational too!',
    },
    {
        'category': 'YEAR_5',
        'location': '',
        'name': 'FB',
        'testimony': 'I always looked forward to Friday. They always had a variety of activities, which meant we got the learn the same skill but in lots of different ways. ',
    },
    {
        'category': 'YEAR_6',
        'location': '',
        'name': 'LB',
        'testimony': 'I think the team were really kind and they made learning fun.',
    },
    {
        'category': 'YEAR_6',
        'location': '',
        'name': 'CB',
        'testimony': 'I found it really good and I got a lot of exercise done. I barely left during lockdown and this really helped me when I came back to school.',
    },
    {
        'category': 'YEAR_6',
        'location': '',
        'name': 'CM',
        'testimony': 'When we wake up our bodies are really tired, when we do exercise our bodies get energised. This made me feel really happy to learn and I was really energised.',
    },
    {
        'category': 'YEAR_6',
        'location': '',
        'name': 'HW',
        'testimony': 'They were really good at giving us a variety of exercises.',
    },
    {
        'category': 'YEAR_6',
        'location': '',
        'name': 'LBA',
        'testimony': 'They were really helpful and I feel fitter and healthier.',
    },
    {
        'category': 'YEAR_6',
        'location': '',
        'name': 'BF',
        'testimony': 'They were always willing to let us have a go and it was really nice to know that failure is okay.',
    },
    {
        'category': 'YEAR_6',
        'location': '',
        'name': 'FB',
        'testimony': 'I always looked forward to Friday. They always had a variety of activities, which meant we got the learn the same skill but in lots of different ways.',
    },
];
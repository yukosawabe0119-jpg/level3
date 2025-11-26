// レッスンデータ
const lessons = {
    'L1-1': {
        title: 'L1-1 - 第1課 パート1',
        url: 'https://view.genially.com/692515d6f021a8539ca7ac08'
    },
    'L1-2': {
        title: 'L1-2 - 第1課 パート2',
        url: 'https://view.genially.com/69259b0592682ae90be9956a'
    },
    'L2-1': {
        title: 'L2-1 - 第2課 パート1',
        url: 'https://view.genially.com/6926dc0131d78c8e66a4d1bc'
    },
    'L2-2': {
        title: 'L2-2 - 第2課 パート2',
        url: 'https://view.genially.com/6926ddbc31d78c8e66a52328'
    },
    'L3-1': {
        title: 'L3-1 - 第3課 パート1',
        url: 'https://view.genially.com/6926df11369dc90b3bab08e0'
    },
    'L3-2': {
        title: 'L3-2 - 第3課 パート2',
        url: 'https://view.genially.com/6926e02cee2ad5958762e4ef'
    }
};

// URLパラメータからレッスンIDを取得
function getLessonId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    const lessonId = getLessonId();
    const lesson = lessons[lessonId];
    
    if (!lesson) {
        // レッスンが見つからない場合はホームに戻る
        window.location.href = 'index.html';
        return;
    }
    
    // タイトルとiframeのソースを設定
    document.getElementById('lesson-title').textContent = lesson.title;
    document.getElementById('lesson-iframe').src = lesson.url;
    document.getElementById('external-link').href = lesson.url;
    
    // 全画面表示ボタンのイベント
    document.getElementById('fullscreen-btn').addEventListener('click', function() {
        const iframe = document.getElementById('lesson-iframe');
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    });
});

// iframeの読み込みエラーハンドリング
document.getElementById('lesson-iframe')?.addEventListener('error', function() {
    console.error('レッスンの読み込みに失敗しました');
    alert('レッスンの読み込みに失敗しました。ネットワーク接続を確認してください。');
});

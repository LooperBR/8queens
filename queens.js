class Tabuleiro{
    constructor(size){
        this.squares = []
        this.history = []
        this.results = []
        this.size = size
        for(let i=0;i<this.size;i++){
            let linha = []
            for(let j=0;j<this.size;j++){
                linha.push(0)
            }
            this.squares.push(linha)
        }
        this.history.push(this.squares)
    }

    gambiarra(linha){
        for(let i=0;i<this.size;i++){
            if(this.is_valid_position(linha,i)){   
                this.squares[linha][i]=1
                if(linha == this.size-1){
                    let result = JSON.parse(JSON.stringify(this.squares))
                    this.results.push(result)
                }else{
                    this.gambiarra(linha+1)
                }
                this.squares[linha][i]=0
            }
        }
        return
    }

    is_valid_position(linha,coluna){
        for(let i=0;i<this.size;i++){
            for(let j=0;j<this.size;j++){
                if(this.squares[i][j]==1){
                    if(i==linha || j==coluna || i+j==linha+coluna || i-j==linha-coluna){
                        return false
                    }
                }
            }
        }
        return true
    }

    print_all(){
        console.log("tabuleiro")
        for(let i=0;i<this.size;i++){
            console.log(JSON.stringify(this.squares[i]))
        }
    }
    print_history(){
        console.log("historico")
        for(let i=0;i<this.history.length;i++){
            for(let j=0;j<this.size;j++){
                console.log(JSON.stringify(this.history[i][j]))
            }
        }
    }

    print_results(){
        console.log("results")
        for(let i=0;i<this.results.length;i++){
            console.log('resultado'+i)
            for(let j=0;j<this.size;j++){
                console.log(JSON.stringify(this.results[i][j]))
            }
            
        }
    }
}
// let tabuleiro = []

// let tamanho = 8

// for(let i=0;i<tamanho;i++){
//     let linha = []
//     for(let j=0;j<tamanho;j++){
//         linha.push(0)
//     }
//     tabuleiro.push(linha)
// }
// for(let i=0;i<tamanho;i++){
//     console.log(JSON.stringify(tabuleiro[i]))
// }

let tabuleiro = new Tabuleiro(8)
tabuleiro.gambiarra(0)
tabuleiro.print_results()
algoritmo "mergesort"

// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Robson
// Descrição   : Ordenação método MergeSort
// Autor(a)    : Fábio José
// Data atual  : 19.03.2021

var
a, t : vetor [0..9] de inteiro
i : inteiro


funcao calcula_media(primeiro, ultimo: inteiro) : inteiro
inicio
       retorne ((primeiro + ultimo + 1) \ 2)
fimfuncao



procedimento preenche_temp(primeiro, ultimo: inteiro)
inicio
        para i de primeiro ate ultimo faca
             t[i] <- a[i]
        fimpara
fimprocedimento

procedimento msort (primeiro, ultimo: inteiro)

var
j, k, m : inteiro
cond: logico

inicio
  se primeiro < ultimo entao
     m <- calcula_media(primeiro, ultimo)
     // classificar as duas subparte da matriz
     msort(m, ultimo)
     msort(primeiro, m - 1)
     // salvar em array temporário
     preenche_temp(primeiro, ultimo)
     // mesclar 2 cópias de subarrays ordenados
     // na matriz original
     // contador para o primeiro array
     j <- primeiro
    // contador para a segunda matriz
     k <- m
     para i de primeiro ate ultimo faca
          se j >= m entao
             a[i] <- t[k]
             k <- k + 1
          senao
               se k > ultimo entao
               a[i] <- t[j]
                j <- j + 1
               senao
                    se t[k] < t[j] entao
                    a[i] <- t[k]
                    k <- k + 1
                    senao
                         a[i] <- t[j]
                         j <- j + 1
                    fimse
               fimse
          fimse
     fimpara
  fimse

fimprocedimento

procedimento apresentar (status : caracter)
inicio
        escreval("Vetor : " , status)
        para i de 0 ate 9 faca
             escreva(a[i], " ")
        fimpara
        escreval("")
        escreval("-----------------------------")
        escreval(" ")
fimprocedimento

procedimento criarVetor()

inicio

para i de 0 ate 9 faca
     // criar vetor base
     a[i] <- Randi(100)
     // vetor temporario
     t[i] <- a[i]
  fimpara
fimprocedimento

inicio

         // criar vetor
         criarVetor()
        // apresenta vetor original
        apresentar("Original")
        // Ordena vetor
        msort(0, 9)
        // apresenta vetor ordenado
        apresentar("Ordenado")

fimalgoritmo